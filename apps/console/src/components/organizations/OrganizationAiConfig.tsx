import { Button, Card, Option, Select, useToast } from "@probo/ui";
import { useCallback, useEffect, useState } from "react";
import { fetchQuery, graphql, useMutation, useRelayEnvironment } from "react-relay";

import { useOrganizationId } from "#/hooks/useOrganizationId";

const aiConfigQuery = graphql`
  query OrganizationAiConfigQuery($organizationId: ID!, $provider: IcpmsAiProvider!) {
    icpmsAiConfig(organizationId: $organizationId, provider: $provider) {
      provider
      apiKeyMasked
      defaultModel
      isEnabled
      isKeyConfigured
    }
  }
`;

const upsertAiConfigMutation = graphql`
  mutation OrganizationAiConfigUpsertMutation($input: UpsertIcpmsAiConfigInput!) {
    upsertIcpmsAiConfig(input: $input) {
      config {
        provider
        apiKeyMasked
        defaultModel
        isEnabled
        isKeyConfigured
      }
    }
  }
`;

export function OrganizationAiConfig() {
  const organizationId = useOrganizationId();
  const environment = useRelayEnvironment();
  const { toast } = useToast();

  const [aiModel, setAiModel] = useState("gemini-2.5-flash");
  const [geminiKeyInput, setGeminiKeyInput] = useState("");
  const [geminiKeyMasked, setGeminiKeyMasked] = useState<string | null>(null);
  const [geminiKeyConfigured, setGeminiKeyConfigured] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  const [commitUpsertConfig] = useMutation(upsertAiConfigMutation);

  const loadGeminiConfig = useCallback(() => {
    (fetchQuery(environment, aiConfigQuery, { organizationId, provider: "GEMINI" }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const cfg = data?.icpmsAiConfig;
        if (cfg) {
          setGeminiKeyMasked(cfg.apiKeyMasked ?? null);
          setGeminiKeyConfigured(cfg.isKeyConfigured ?? false);
          if (cfg.defaultModel) setAiModel(cfg.defaultModel);
        }
      })
      .catch(() => {});
  }, [environment, organizationId]);

  useEffect(() => {
    loadGeminiConfig();
  }, [loadGeminiConfig]);

  const handleSaveGeminiKey = () => {
    if (!geminiKeyInput.trim() && !geminiKeyConfigured) {
      toast({ title: "Chưa có API Key", description: "Hãy nhập API Key Gemini trước khi lưu cấu hình.", variant: "error" });
      return;
    }
    setSavingSettings(true);
    const keyToSend = geminiKeyInput.trim() || null;
    commitUpsertConfig({
      variables: {
        input: {
          organizationId,
          provider: "GEMINI",
          apiKey: keyToSend,
          defaultModel: aiModel,
          isEnabled: true,
        },
      },
      onCompleted: (res: any) => {
        setSavingSettings(false);
        const cfg = (res as any).upsertIcpmsAiConfig?.config;
        if (cfg) {
          setGeminiKeyMasked(cfg.apiKeyMasked ?? null);
          setGeminiKeyConfigured(cfg.isKeyConfigured ?? false);
        }
        setGeminiKeyInput("");
        toast({ title: "Đã lưu cấu hình Gemini", description: "API key đã được lưu thành công.", variant: "success" });
      },
      onError: (err: Error) => {
        setSavingSettings(false);
        toast({ title: "Không thể lưu cấu hình", description: err.message, variant: "error" });
      },
    });
  };

  return (
    <div className="space-y-4 mt-12">
      <h2 className="text-base font-medium">Cấu hình AI (Gemini API)</h2>
      <Card padded className="space-y-4">
        <p className="text-sm text-txt-tertiary mb-2">
          Cấu hình khoá API và mô hình ngôn ngữ lớn (LLM) để sử dụng cho tính năng Rà soát AI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-txt-primary mb-1">
              API Key Gemini
              {geminiKeyConfigured && geminiKeyMasked && (
                <span className="ml-2 text-green-600 font-mono text-xs">{geminiKeyMasked}</span>
              )}
            </label>
            <input
              type="password"
              value={geminiKeyInput}
              onChange={e => setGeminiKeyInput(e.target.value)}
              placeholder={geminiKeyConfigured ? "Nhập key mới để thay thế..." : "AIzaSy..."}
              className="w-full px-3 py-2 text-sm rounded-md border border-border-solid bg-surface-secondary focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              autoComplete="off"
            />
            <p className="text-xs text-txt-tertiary mt-1">
              Key không hiển thị lại sau khi lưu. Nếu để trống, key hiện tại sẽ được giữ nguyên.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-txt-primary mb-1">Engine / Model mặc định</label>
            <Select<string> value={aiModel} onValueChange={setAiModel}>
              <Option value="RULE_BASED">Nội bộ (Rule-based)</Option>
              <Option value="gemini-2.5-flash">Gemini 2.5 Flash</Option>
              <Option value="gemini-2.5-pro">Gemini 2.5 Pro</Option>
            </Select>
            <p className="text-xs text-txt-tertiary mt-1">
              {geminiKeyConfigured
                ? <>Model đang dùng: <span className="font-medium text-txt-primary">{aiModel === "RULE_BASED" ? "Nội bộ (Rule-based)" : aiModel}</span></>
                : "Chưa có API Key — đang dùng Rule-based nội bộ."}
            </p>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <Button onClick={handleSaveGeminiKey} disabled={savingSettings}>
            {savingSettings ? "Đang lưu..." : "Lưu cấu hình"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
