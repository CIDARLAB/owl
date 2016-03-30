**OWL v.2.0**
---


----------


![enter image description here](http://cidar.bu.edu/owl/images/logo-Owl-Color_cropped.png)

## **To run locally:** ##
In order to run Owl locally, you will need to install the following dependencies:

 - **Node.js** ([link](https://nodejs.org/en/)). Specify the PATH.


 - **Elasticsearch** ([link](https://www.elastic.co/downloads/elasticsearch)). Run via terminal/cmd.



> After cloning Owl from the GitHub repo, you might need to reinstall the "node modules" specified as dependencies in  ***package.json***:

In terminal window, open the Project directory and run the following commands:
`npm cache clean`
`rm -rf node_modules`
`npm install express --save`
`npm install .`

## **RUN:** ##
To run, open the project folder in a terminal window and type:

 `node server.js`
or
`nodemon server.js` , if you prefer the module "nodemon".

> Written with [StackEdit](https://stackedit.io/).
