import { RevealOnScroll } from "./RevealOnScroll"

export interface TimelineContentItem {
  header: string
  summary: string
  img: {
    src: string
    alt: string
  }
}

interface TimelineProps {
  content: TimelineContentItem[]
}

export const Timeline: React.FC<TimelineProps> = ({ content }) => {
  return (
    <div className="md:w-3/4 lg:w-2/3 2xl:w-1/2">
      {content.map((item, index) => (
        <RevealOnScroll key={`timeline-item-${index}`}>
          <TimelineItem
            item={item}
            index={index}
            contentLength={content.length}
          />
        </RevealOnScroll>
      ))}
    </div>
  )
}

interface TimelineItemProps {
  item: TimelineContentItem
  index: number
  contentLength: number
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  contentLength,
}) => {
  const isFirstItem = index === 0
  const isLastItem = index === contentLength - 1
  const isEvenItem = index % 2 === 0

  return (
    <div className={`flex ${isEvenItem ? "flex-row-reverse" : "flex-row"}`}>
      {/* image */}
      <div
        className={`basis-[calc(50%-0.25rem)] flex ${
          isEvenItem ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className={`h-1 bg-accent self-center basis-1/4`} />
        <img
          src={item.img.src}
          alt={item.img.alt}
          className={`w-2/3 lg:w-1/2 self-center rounded-lg shadow-xl`}
        />
      </div>

      {/* center part */}
      <div className="relative w-2 grow">
        {/* vertical line */}
        <div
          className={`absolute ${
            isFirstItem
              ? "h-[calc(50%+0.25rem)] translate-y-full"
              : isLastItem
              ? "h-[calc(50%+0.25rem)]"
              : "h-full"
          } w-2 bg-accent mx-auto`}
        />

        {/* circle */}
        <div className="flex h-full w-6 -translate-x-2">
          <div
            className={`self-center z-[5] h-6 w-6 bg-[#02ad99] rounded-full`}
          />
        </div>
      </div>

      {/* text */}
      <div
        className={`flex flex-col self-center basis-[calc(50%-0.25rem)] p-4 lg:p-6 bg-container/95 border-b-4 border-accent shadow-xl h-full rounded-xl ${
          isFirstItem ? "sm:mb-6" : "sm:my-6"
        }`}
      >
        <h2 className="text-lg mb-2 font-semibold tracking-wide">
          {item.header}
        </h2>
        <p className="text-sm font-light">{item.summary}</p>
      </div>
    </div>
  )
}
