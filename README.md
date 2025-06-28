# Testing with React-vitest

> Prerequisite: `Setup Project using vite react`

 ### 1. Install the necessary dependencies

```sh
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### 2. Configure Vitest in vite.config.ts

```sh
/// <reference types="vitest" />
/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/vitest.setup.ts'],
    css : true,
    testTimeout : 5000,
    reporters : ['verbose']
  },
})
```

### 3. Update package.json
```sh
"scripts": {
  + "test" : "vitest",
  + "test:watch" : "vitest --watch",
  + "test:ui" : "vitest --ui"
}
```

### 4. Update tsconfig.app.json
```sh
 "compilerOptions": {
    "types": ["vitest/globals"] 
  },
 "include": ["src", "src/vitest.setup.ts"]
```

### 5. Create a setup tests file 
#### src/vitest.setup.ts

```sh
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
    cleanup()
})
```

#### 6. App.tsx file will like this
```sh
const App = () => {
  return (
    <div>
      <h1>Hello world! My first test case.</h1>
    </div>
  )
}

export default App
```

#### 7. Create Test file ---->   App.test.tsx 
```sh
import { render, screen } from '@testing-library/react';
import App from "../src/App";

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText(/Hello world! My first test case./i);
    expect(headline).toBeInTheDocument();
  });
});
```


#### 8. Now Run the test
```sh
 npm test
```
