async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
  

export default async function Test() {
    await delay(3000)
    return (
      <div>Test Page</div>
    )
  }
  