# React CLI

A NodeJS Command Line Utility to increase your productivity while working on a ReactJS project.

### Description

React CLI (aka rct) helps you to automate the most obvious tasks which we as developers used to do manually such as creating a new component by making a separate folder & then making component's jsx or css files manually.

rct helps you out with these kind of tasks by providing you simple to use command line tool.

![React CLI Poster](https://github.com/hvg2416/react-cli/blob/dc763424a982cc0eb0bff4aae5d1b8a29b88058d/banner.png?raw=true)

### Installation

```javascript
  npm i react-cli-utility -g
```

### Usage

```text rct [command]

Commands:
  rct cra  Use this command to scaffold a new react application (TYPESCRIPT
           template is default)
  rct gc   Use this command to generate a new react component

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --js       Set this flag to true to scaffold new react application with
             javascript template                                       [boolean]
  --css      Set this flag to true to scaffold new react component along with
             it's css style file                                       [boolean]
  --class    Set this flag to true to scaffold new class based react component
                                                                       [boolean]
```

### Examples

#### Scaffolding a new React Application

```bin
rct cra <app-name> [--js]
```

e.g.

```bin
rct cra todo-app
```

#### Generating a new React Component

```bin
rct gc <component-name> [--js --css --class]
```

e.g.

```bin
rct gc NavBar
```
