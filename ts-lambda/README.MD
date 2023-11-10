# Proyecto Lambda en TypeScript

Back End

1. Ejecuta npm install.

2. Para instalar Redis, debes tener previamente instalado Docker. Ejecuta el siguiente comando para iniciar un contenedor de Redis:
   docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

3. Para ejecutar el proyecto, simplemente escribe npm run dev.

4. Si deseas ejecutar las pruebas con Jest, utiliza el comando npm test.

curl --location 'http://localhost:3000/dev/token' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer pk_test_LsRb12fdsvdew21' \
--data-raw '{
"email": "jose.corzo@gmail.com",
"card_number": "4214556170098862",
"cvv": "123",
"expiration_year":"2024",
"expiration_month":"07"
}'

curl --location 'http://localhost:3000/dev/charger' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer pk_test_LsRb12fdsvdew21' \
--data '{
"token":"DMOZPhWdXgExJO4j"
}'
