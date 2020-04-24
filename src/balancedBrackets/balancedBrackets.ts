function isBalancedBracket(brackets: string): "YES" | "NO" {
  const seenBrackets: string[] = [];

  for (const char of brackets) {
    if (char === "]" || char === ")" || char === "}") {
      const startBracket = seenBrackets.pop();

      if (char === "]" && startBracket !== "[") {
        return "NO";
      } else if (char === ")" && startBracket !== "(") {
        return "NO";
      } else if (char === "}" && startBracket !== "{") {
        return "NO";
      }
    } else {
      seenBrackets.push(char);
    }
  }

  return seenBrackets.length === 0 ? "YES" : "NO";
}

export { isBalancedBracket };
