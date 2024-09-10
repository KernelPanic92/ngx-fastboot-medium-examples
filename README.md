# ngx-fastboot-medium-examples

This repository contains two Angular projects with the same dependencies, demonstrating two different approaches to bootstrapping the application. If you've read the related article, here you can personally test the final bundle size of the two projects.

## Project Structure

- **[classic/](/classic)**: An Angular app using the traditional `bootstrapApplication` method in the `main.ts` file.
- **[fast/](/fast)**: An Angular app using `ngx-fastboot` for an optimized bootstrap focused on performance.

## Prerequisites

If you don't have `pnpm`, you can install it by running:

```bash
npm install -g pnpm
```

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/KernelPanic92/ngx-fastboot-medium-examples.git
   ```

2. Navigate into the project directory:

   ```bash
   cd ngx-fastboot-medium-examples
   ```

3. Install dependencies for both projects:

   ```bash
   pnpm install
   ```

## Running the Projects

You can build both projects to compare their final bundle sizes. Each project can be built and run separately:

### Build the `classic` project

This command builds the project that uses the traditional `bootstrapApplication`:

```bash
cd classic
pnpm run build
```

### Build the `main` project

This command builds the project that uses `ngx-fastboot`:

```bash
cd fast
pnpm run build
```

## Comparing the Final Bundle

After running the build commands, you will find the compiled bundles output in the terminal console. You can compare the size and content of the files to understand the differences between the two bootstrapping approaches.

## Useful Resources

- [Angular Documentation](https://angular.io/docs)
- [NGX Fastboot](https://www.npmjs.com/package/ngx-fastboot)

## Contributing

Feel free to open a pull request or report issues in the **Issues** section if you'd like to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.