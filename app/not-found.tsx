import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">
      <section className="mx-auto max-w-2xl text-center">
        <p className="mb-5 font-en text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Page Not Found
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-charcoal sm:text-5xl">
          찾으시는 페이지를
          <br />
          확인할 수 없습니다.
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-8 text-muted">
          주소가 바뀌었거나 아직 준비 중인 페이지일 수 있습니다.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-colors duration-300 ease-calm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          메인으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
