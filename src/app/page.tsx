import { RevealOnScroll } from '@/components/reveal-on-scroll';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between max-sm:px-6 max-sm:pt-12 p-24 pb-32 break-words break-keep bg-white">
        <div className="max-w-5xl w-full items-start flex flex-col">
          <section>
            <RevealOnScroll>
              <Image
                src="/logo-crop.svg"
                alt="Strapbuild"
                width={250}
                height={66}
                priority
              />
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="mt-12 text-6xl font-bold leading-tight text-[#051E4C]">
                창의성이 탁월한 <br />
                기술력을 만나는 곳
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="delay-300">
              <p className="mt-24 max-w-3xl text-xl leading-normal">
                2023년 설립된 스트랩빌드는 여러 고객에게 매끄러운 솔루션을
                제공하는 디지털 프로덕션 에이전시로 빠르게 자리를 잡았습니다.{' '}
                <br />
                스트랩빌드의 전문가 팀은 ‘세계의 모든 이가 진정으로 더 중요한
                문제에 집중할 수 있도록 돕는다’는 미션 하에, 아이디어를 뛰어난
                디지털 경험으로 전환하는 데 열정을 쏟고 있습니다.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="delay-300">
              <a
                href="/files/스트랩빌드_회사소개서.pdf"
                download="스트랩빌드_회사소개서.pdf"
                className="mt-4 inline-flex text-lg font-semibold hover:underline underline-offset-4 text-gray-500"
              >
                회사소개서 PDF
                <Image
                  src="/icons/attachment-24.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </RevealOnScroll>
          </section>
          <section>
            <RevealOnScroll className="delay-400">
              <h1 className="mt-48 text-5xl font-extrabold text-[#051E4C]">
                Our Clients
              </h1>
            </RevealOnScroll>
            <RevealOnScroll className="delay-400">
              <div className="flex flex-wrap items-center gap-8 mt-12">
                <a href="https://www.kbstar.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/client-logo/kb-bank.svg"
                    alt="KB국민은행"
                    width={150}
                    height={60}
                  />
                </a>
                <a href="https://mmaa.or.kr" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/client-logo/mmaa.svg"
                    alt="군인공제회"
                    width={150}
                    height={60}
                  />
                </a>
                <a href="https://mnd.go.kr" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/client-logo/rok-mnd.png"
                    alt="국방부"
                    width={150}
                    height={60}
                  />
                </a>
                <a href="http://iconix.co.kr" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/client-logo/iconix.png"
                    alt="아이코닉스"
                    width={120}
                    height={60}
                  />
                </a>
              </div>
            </RevealOnScroll>
          </section>
          <section>
            <RevealOnScroll>
              <h1 className="mt-48 text-5xl font-extrabold text-[#051E4C]">
                Contact Us
              </h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="mt-8 text-xl leading-loose">
                <h2 className="mt-4 font-bold text-[#051E4C]">본사 주소</h2>
                <div className="flex">
                  <a
                    href="maps://?q=서울 마포구 양화로 81, 415호 (서교동, H스퀘어)"
                    className="hover:underline"
                  >
                    (04034) 서울 마포구 양화로 81, 415호 (서교동, H스퀘어)
                  </a>
                </div>
                <h2 className="mt-4 font-bold text-[#051E4C]">대표 전화번호</h2>
                <div className="flex">
                  <a href="tel:+82-70-8190-5741" className="hover:underline">
                    070-8190-5741
                  </a>
                </div>
                <h2 className="mt-4 font-bold text-[#051E4C]">이메일 문의</h2>
                <div className="flex">
                  <a
                    href="mailto:contact@strap.build"
                    className="hover:underline"
                  >
                    contact@strap.build
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </section>
        </div>
      </main>
      {/* FIXME: footer는 layout으로 가야 함 */}
      <footer className="bg-[#DCE4F3] w-full flex flex-col items-center p-16 pb-24 max-sm:px-4 text-[#506282] text-lg break-words break-keep">
        <div className="max-w-5xl w-full items-start flex flex-col">
          <Image
            src="/logo-crop-light.svg"
            alt="Strapbuild"
            width={120}
            height={66}
            priority
          />
          <div className="flex w-full mt-1 gap-12">
            <div className="flex flex-col">
              <div className="font-semibold">주식회사 스트랩빌드</div>
              <div className="mt-3 leading-relaxed">
                <span className="font-medium">대표</span> 이호준 <br />
                <span className="font-medium">사업자등록번호</span> 736-87-03067
              </div>
              <div className="mt-4 pt-1 border-spacing-2 border-[#506282] border-t leading-relaxed">
                <span className="font-medium">본사: </span>(04034) 서울 마포구
                양화로 81, 415호 (서교동, H스퀘어) <br />
                <span className="font-medium">
                  대표전화:{' '}
                </span> 070-8190-5741 <br />
                <span className="font-medium">이메일: </span>{' '}
                contact@strap.build <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
