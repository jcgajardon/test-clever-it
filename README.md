# Proyecto números primos - Test Clever IT

## Instalación

El proyecto esta dockerizado, por lo cual debemos realizar el pull desde la siguiente URL de https://hub.docker.com/ con el siguiente comando:

!!!IMPORTANTE -> debemos tener instalado docker en nuestra maquina para mas información: https://docs.docker.com/get-docker/

```bash
docker pull jcgajardon/nodejs-clever-it-test
```

Para ejecutar nuestra imagen ejecutamos el siguiente comando:

```bash
docker run --name nodejs-clever-it-test -p 3000:3000 -d jcgajardon/nodejs-clever-it-test
```

Con el siguiente comando podemos validar que nuestro contenedor esta funcionando correctamente:

```bash
docker ps
```

## Uso

Ya instalado nuestro container, podemos por postman como método de tipo GET y con la URL: http://localhost:3000/api/function/primeNumbers/15 nos entregara un arreglo de números con la respuesta que esperamos. Importante mencionar que devuelva un arreglo de números como tal no esta en el ejercicio ya que tiene que imprimirlos, me pareció bien devolver un arreglo y ademas imprimirlos por consola en su ejecución local.

## FIN