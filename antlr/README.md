This directory contains an [ANTLR](https://www.antlr.org/) grammar for parsing search strings and converting them to data structures we can use for things like syntax highlighting in the client, and building SQL queries on the server.

The only file we maintain by hand is `SearchGrammar.g4`, the rest of the files are generated by antlr. Use the `yarn generate:antlr:*` to generate the language-specific code we need for in our app.

If you are making changes to the `.g4` grammar file, you can copy/paste it into [lab.antlr.org](http://lab.antlr.org/) to experiment with changes and how it will impact parsing.

**Note:** if you make changes to the grammar file you will need to run `yarn generate:antlr` to re-generate the all the language specific files needed.
