# route code

```js
<Routes>
  <Route path="/" element={<Header />}>
    <Route path="/main" element={<Main />} />
    <Route path="/graph/:id" element={<Graph />} />
    <Route path="/new" element={<New />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Redirector />} />
  </Route>
  <Route path="*" element={<Redirector />} />
</Routes>
```

# routes

- /main : mainpage
- /graph/:id : graph
- /new : making new graph
- /signup : signup
- /login : login
