
API="https://tic-tac-toe-api-production.herokuapp.com"
URL_PATH="/change-password"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=925273102235a0c8a59d4facb7957f2e" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

  echo
