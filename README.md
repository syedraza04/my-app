CSS Modules are used to scope css files

npm run eject
everything is managed for me but i can edit configuration project

after we do a npm run reject, there are two folders that
are output "Config" and "scripts",

to make css modules work go in the config/webpack.config.dev
and there add the following code to the options prop line 167

importLoaders: 1,
modules:true,
localIdentName:'[name]__[local]__[hash:base64:5]'

then go to webpack.config.prod folder and copy these in the css loaders there

## Error Boundary is a high order component that can be used to encopmpass the child component if it throws an error

