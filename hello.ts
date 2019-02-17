function hello(name?: string | null) {
  console.log(`Hello, ${name}`)
}

hello('typescript');
hello(null);
hello(undefined);
hello();
