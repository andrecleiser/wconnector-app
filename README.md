# wConnectorApp

Aplicação cliente usada para fazer a comunicação com a aplicação core.

## Estrutura do projeto

A aplicação não utiliza banco de dados.
Usa a aplicação core para autenticar com a LDAP

## Desenvolvimento

Utiliza:

- angular no frontend
- java e Spring no backend

## Building para disponibilizar em produção

### Executável jar

1. Para construir o pacote executável para disponibilizar à produção, execute:

```
./mvnw -Pprod clean verify -DskipTests
```

2. A pasta com o java deve ser copiado ao servidor da aplicação

3. A aplicação necessita de parâmetros de configuração.
   -Djhipster.security.authentication.jwt.base64-secret=<VALOR>
   -Djhipster.security.authentication.token-validity-in-seconds=<VALOR>
   -Dspring.datasource.url=j<VALOR>
   -Dspring.datasource.username=<VALOR>
   -Dspring.datasource.password=<VALOR>
   -Dspring.ldap.base=dc=nt,dc=coremal
   -Dspring.ldap.urls=ldap://crlpe-w12-ad02.nt.coremal:389
   -Dspring.ldap.username=<VALOR>
   -Dspring.ldap.password=<VALOR>
   -Dlogging.level.ROOT=DEBUG
   -Dlogging.level.'tech.jhipster'=DEBUG
   -Dlogging.level.'org.hibernate.SQL'=DEBUG
   -Dlogging.level.'com.coremal.wconnector'=DEBUG
   -Dapplication.ambiente=prod

4. Deve ser criado um arquivo .bat para facilitar a execução da aplicação.
   Exemplo de .bat
   C:\acleiser\jdk-11.0.14\bin\java ^
   -Djhipster.security.authentication.jwt.base64-secret=VALOR ^
   -Djhipster.security.authentication.token-validity-in-seconds=VALOR ^
   -Dspring.datasource.url=VALOR ^
   -Dspring.datasource.username=VALOR ^
   -Dspring.datasource.password=VALOR ^
   -Dspring.ldap.base=dc=nt,dc=coremal ^
   -Dspring.ldap.urls=ldap://crlpe-w12-ad02.nt.coremal:389 ^
   -Dspring.ldap.username=VALOR ^
   -Dspring.ldap.password=VALOR ^
   -Dlogging.level.ROOT=DEBUG ^
   -Dlogging.level.'tech.jhipster'=DEBUG ^
   -Dlogging.level.'org.hibernate.SQL'=DEBUG ^
   -Dlogging.level.'com.coremal.wconnector'=DEBUG ^
   -Dapplication.ambiente=homologacao ^
   -jar "NOME DO ARQUIVO JAR GERADO".jar
