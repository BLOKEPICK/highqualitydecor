// Root page is unused because middleware rewrites "/" to /desktop or /mobile.
// Keep a minimal component to satisfy Next build without pulling extra client code.
export default function Page() {
  return null;
}
