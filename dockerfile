FROM cypress/included:7.1.0

RUN mkdir /e2e 
WORKDIR /e2e

COPY cypress /e2e/cypress
COPY cypress.json /e2e/cypress.json
COPY package.json /e2e/package.json
COPY package-lock.json /e2e/package-lock.json

# install plugins
RUN npm i --save-dev cypress@7.0.0
RUN npm i --save-dev @testing-library/cypress