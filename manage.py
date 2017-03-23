#!/usr/bin/env python
import os
import sys

from djangae_react_blog.boot import fix_path
fix_path(include_dev_libs_path=True)

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "djangae_react_blog.settings")

    from djangae.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
