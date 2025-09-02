#!/bin/bash

# 本番環境のタスク作成のPOSTリクエストをテスト
curl -X POST \
  https://react-practice-backend.vercel.app/api/tasks \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{"title": "新しいタスク", "text": "これは新しいタスクの説明です", "url": "https://example.com"}'
