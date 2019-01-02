# monorepo-babel
Practice monorepo with Babel 7

### Solution

1. Uage with `babelrcRoots` and subpackage's `.babelrc`.

```bash
cd babel-upward
yarn start
```

Note: 
> Suitable for monorepo subpackages babel cofnig is optional for different Babel config, but the execution path must be in the root directory of monorepo.

2. Usage with rootMode `upward` from `babel`.

```bash
cd babel-upward/packages/bar
yarn start
```

Note: 
> Suitable for monorepo subpackages all share the same Babel config, and the execution root path can be a subpackage, then use `ignore` CLI arg or other way(`@babel/register`) overrides patterns match.


3. Usage with `babel-plugin-module-resolver`.

```bash
cd module-resolver
yarn start
```

Note: 
> Suitable for monorepo subpackages babel cofnig is optional for different Babel config, but the execution path must be in the root directory of monorepo, then set a `babel-plugin-module-resolver` alias config reusinf other plugin.


4. Usage with 3rd-party tool(Gulp) 

```bash
cd 3rd-party-tool
yarn start
```

Note: 
> Suitable for monorepo subpackages babel cofnig is optional for different Babel config, but the execution path must be in the root directory of monorepo with 3rd-party tool.