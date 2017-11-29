module.exports = {
	entry: "./src/main",
	output: {
		path: __dirname,
		filename: "./dist/bundle.js",
		publicPath: "/"
	},
	devServer:{
		publicPath: "/",
		contentBase: "./src",
		proxy: { 
	    	'/web': {  //catch all requests
	      		target: 'http://localhost:8080/',  //default target
	      		secure: false
      		}
	    }
	},
	resolve: {
		extensions: ['.js', '.ts', '.html']
	},
	module: {
		loaders: [
			{test: /\.ts/, loaders: ['ts-loader', 'angular2-template-loader']},
			{ 
		      test: /\.(html|css)$/, 
		      loader: 'raw-loader',
		      exclude: /\.async\.(html|css)$/
		    },
		    /* Async loading. */
		    {
		      test: /\.async\.(html|css)$/, 
		      loaders: ['file?name=[name].[hash].[ext]', 'extract']
		    },
		    {
		    	test: /\.css$/,
		    	loader: 'style-loader!css-loader'
		    }
		]
	}
}