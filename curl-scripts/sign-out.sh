
API="https://tic-tac-toe-api-production.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=c186e0e199ee167573d5bddbc57d291f" \
