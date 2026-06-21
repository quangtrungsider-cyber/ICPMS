import os


def get_project_base_directory():
    return os.path.dirname(os.path.abspath(__file__ + "/.."))


def traversal_files(base):
    for root, dirs, files in os.walk(base):
        for f in files:
            yield os.path.join(root, f)
