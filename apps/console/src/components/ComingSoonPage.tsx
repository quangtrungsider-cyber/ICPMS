// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { Card, IconBox } from "@probo/ui";

export function ComingSoonPage(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <Card className="max-w-md w-full p-8 flex flex-col items-center gap-4 text-center">
        <div className="text-txt-tertiary">
          <IconBox size={48} />
        </div>
        <h2 className="text-lg font-semibold text-txt-primary">{props.title}</h2>
        <p className="text-sm text-txt-secondary">{props.description}</p>
      </Card>
    </div>
  );
}
