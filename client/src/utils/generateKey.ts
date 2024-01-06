export default function GenerateKey() {
  return `key:${Math.random().toString(36).slice(2, 7)}`;
}