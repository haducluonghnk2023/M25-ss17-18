import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

async function getProduct(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/products/${id}`
  );
  const product = await response.json();
  return product;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  console.log("chi tiet user", user);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: user.name,
    description: "san pham tot",
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default async function Page({ params }: Props) {
  const product = await getProduct(params.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
  };
  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... */}
    </section>
  );
}
