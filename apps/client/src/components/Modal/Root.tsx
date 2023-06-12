import { cls } from "@/utils/helpers"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import styles from "./modal.module.scss"

type RootProps = {
  closeHandler?: () => void
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Root: FC<RootProps> = ({
  closeHandler,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cls([className, styles.root])}
      onPointerDown={(e) => {
        if (
          !(e.target as HTMLElement).closest("[data-modal-prevent]") &&
          closeHandler
        )
          closeHandler()
      }}
      {...props}
    >
      {children}
    </div>
  )
}
