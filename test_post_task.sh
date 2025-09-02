#!/bin/bash

# タスク作成のPOSTリクエストをテスト
curl -X POST \
  http://localhost:4000/api/tasks \
  -H 'Content-Type: application/json' \
  -d '{"name": "テストタスク"}'
