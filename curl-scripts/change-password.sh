
API="https://tic-tac-toe-api-production.herokuapp.com"
URL_PATH="/change-password"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=e2d6901029099557b2ad4e2f3130f2e8" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

  echo
