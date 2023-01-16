This Project is made with react and typescript. Although, in most places, you won't see a lot of types because I let the library do the heavy lifting here but you can never be too safe and anything is better than dealing with undefined and unknown types.

To run the project: `npm start`

To build: `npm run build`

The project is deployed on netlify. So, in order to publish run: `netlify deploy --prod`. When prompted for directory, give `./build`

This project also leverages `react-query` for query calls and caching, `axios` for API calls and `chakra UI` for styling along with prerequisite of `redux` and `react-router-dom`.

The folder structure created for this project is:

```
- root
  - .netlify //auto-generated
  - build //auto-generated
  - node_modules //dependencies
  - public //auto-generated
  - src
    - components
      - cards //variations of card used
        - HorizontalCards.tsx
        - VerticalCards.tsx
      - cart //components specific to cart page
        - CartBody.tsx
        - DisplayCart.tsx
        - EmptyCart.tsx
      - login //components specific to login page
        - DisplayLogin.tsx
        - LoggedInCard.tsx
        - LoginForm.tsx
      - product //components specific to displaying products
        - ProductInfo.tsx
        - ProductModal.tsx
        - QuantityButtons.tsx
      - summary //components most relevant to OrderSummary page
        - OrderSuccess.tsx
        - OrderSummary.tsx
      - CustomBox.tsx
      - CustomSpinner.tsx
      - Footer.tsx
      - Header.tsx
      - PageHeading.tsx
      - PageWrap.tsx
    - hooks // dedicated for all hooks but this one mostly has API calls
      - useAddToCart.tsx
      - useGetCategories.tsx
      - useGetProducts.tsx
      - useLoginUser.tsx
    - pages // helps to bifurcate between components and screens to show with those components
      - Home.tsx
      - Products.tsx
      - Cart.tsx
      - Products.tsx
    - redux // A place for redux store and all its slices
      - loginSlice.ts
      - quantitySlice.ts
      - store.ts
    - utils // all common functions and objects for providers, etc. basically, miscellaneous
      - baseURL.ts
      - getTheme.ts
    - App.tsx
    - index.tsx
  - .gitignore
  - package-lock.json //auto-generated
  - package.json
  - README.md
  - tsconfig.json
```

P.S: Super sorry for the delay in submission. I don't want to make excuses but since I was learning redux for the 1st time, I thought redux-toolkit would make it easier but the learning curve was still there and not always was I able to find time to finish the project the way I'd have wanted to submit it. I finally managed to finish it, so here it goes!
