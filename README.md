# arithmetic
    - 算法知识点

# 本地如何debug
    - https://www.freesion.com/article/6804240028/
    - vscode launch.json 中的参数:
    `
        {
            "version": "0.2.0",
            "configurations": [
                {
                    "args": [
                        "-u",
                        "bdd",
                        "--timeout",
                        "999999",
                        "--colors",
                        "${workspaceFolder}/test/index.ts"
                    ],
                    "internalConsoleOptions": "openOnSessionStart",
                    "name": "Shanke Mocha",
                    "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
                    "request": "launch",
                    "skipFiles": [
                        "<node_internals>/**"
                    ],
                    "type": "node"
                }
            ]
        }
    `


