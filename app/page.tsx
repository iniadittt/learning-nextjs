import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sunt rem,
        molestias, perspiciatis cupiditate dignissimos temporibus quis dicta
        suscipit doloribus repudiandae dolorum ea minus ex numquam fugiat
        architecto et. Nam, unde id?
      </p>
    </div>
  );
}

// JSX , TSX
