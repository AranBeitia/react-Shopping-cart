`#react.js` `#master-in-software-engineering`

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Assembler School: React Shopping Cart Forms

In this project you will learn how to create a React.js and how to apply all the
important concepts.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

See deployment for notes on how to deploy the project on a live system.

### The repository

First, you will need to `clone` or `fork` the repository into your Github
account:

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

```
$ git clone https://github.com/assembler-school/react-shopping-cart-forms.git
```

## Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents of each
section.

The branches follow a naming strategy like the following:

- `main`: includes the main contents and the instructions
- `assembler-solution`: includes the solution

### Fetching All the Branches

In order to fetch all the remote branches in the repository, you can use the
following command:

```sh
$ git fetch --all
```

### List Both Remote Tracking Branches and Local Branches

```sh
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following
command:

```sh
$ git checkout -b <new_branch_name> <remote_branch_name>
```

### Installing

First, you will need to install the dependencies with: `npm install`.

Run the following command in your terminal after cloning the main repo:

```sh
$ npm install
```

### Running the Tests

The tests that validate your solution can be executed by running the following
command:

```
$ npm run test
```

### Git `precommit` and `prepush` Hooks

In the `assembler-solution` branch you can see an implementation of these tools
if you'd like to use them.

## Deployment

In this pill we won't deploy the app.

## Technologies used

- `React.js`
- `@testing-library/react`
- `eslint`
- `prettier`
- `lint-staged`
- `husky`

## Project requirements

This is an overview of the main requirements of this project. The exact ones are
found in the doc that the academic team will provide you.

- You must follow all the instructions of the project step-by-step
- You should always try to solve them by yourself before asking for help
- You should always help your team members and fellow students of the master so
  that you can all learn together and become better software developers and team
  members
- You must finish all the steps that are marked as `Required`
- You must use semantic HTML5 elements for all the markup of the application
- Once you are done, you can move on to the optional ones that are marked as
  `Extra 💯`

### 1. Creating new products using the `<NewProductForm />` component

#### File

```sh
/src/components/NewProductForm.js
```

1. uncomment all the code in the `App` and `NewProductForm` components
2. in this step you will need to call the `saveNewProduct(newProduct)` method in
   the `App` component to store the new product in `state.products`.
   1. once the product is stored in state, you will also have to set the
      `newProductFormOpen` boolean to false so that the form is closed
3. complete the code of the `NewProductForm` component so that it has a state
   of:

```js
this.state = {
  title: "",
  price: 0,
  img: "",
  shortDescription: "",
  longDescription: "",
  unitsInStock: 0,
  author: {
    firstName: "",
    lastName: "",
    email: "",
  },
  errors: {},
};
```

4. complete the code of all the event handlers of the component:

```jsx
// handleSubmit() {}
// handleTitleInputChange() {}
// handlePriceInputChange() {}
// handleImgInputChange() {}
// handleShortDescriptionInputChange() {}
// handleLongDescriptionInputChange() {}
// handleUnitsInStockInputChange() {}
// handleAuthorFirstNameInputChange() {}
// handleAuthorLastNameInputChange() {}
// handleAuthorEmailInputChange() {}
```

5. define the missing form inputs using the `<Input />` component:

- `title`:
  - type: `text`
  - `handleChange={this.handleTitleInputChange}`
- `price`:
  - type: `number`
  - `handleChange={this.handlePriceInputChange}`
- `img`:
  - type: `text`
  - `handleChange={this.handleImgInputChange}`
- `shortDescription`:
  - type: `text`
  - `handleChange={this.handleShortDescriptionInputChange}`
- `longDescription`:
  - type: `text`
  - `handleChange={this.handleLongDescriptionInputChange}`
- `unitsInStock`:
  - type: `text`
  - `handleChange={this.handleUnitsInStockInputChange}`
- `author.firstName`:
  - type: `text`
  - `handleChange={this.handleAuthorFirstNameInputChange}`
- `author.lastName`:
  - type: `text`
  - `handleChange={this.handleAuthorLastNameInputChange}`
- `author.email`:
  - type: `text`
  - `handleChange={this.handleAuthorEmailInputChange}`

6. complete the code of the `handleSubmit(event)` to store the new product
   1. capture the `productData` from the state of the component
   2. pass it to the `addProductDetails(productData)` method
   3. call `saveNewProduct(newProduct)` with the new product
      1. this method comes from the `App` component
      2. `const { saveNewProduct } = this.props;`

#### Test suite name

@TODO

## Project delivery

To deliver this project you must follow the steps indicated in the document:

- [Submitting a solution](https://www.notion.so/Submitting-a-solution-524dab1a71dd4b96903f26385e24cdb6)

## Resources

- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [reactjs.org](https://reactjs.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.danilucaci.com"><img src="https://avatars.githubusercontent.com/u/19062818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dani Lucaci</b></sub></a><br /><a href="https://github.com/assembler-school/vanilla-js-project-template/commits?author=danilucaci" title="Code">💻</a> <a href="https://github.com/assembler-school/vanilla-js-project-template/commits?author=danilucaci" title="Documentation">📖</a> <a href="#example-danilucaci" title="Examples">💡</a> <a href="#tool-danilucaci" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
