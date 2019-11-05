import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { Container } from 'vtex.store-components'
import { useCssHandles } from 'vtex.css-handles'

import StickyRow from './StickyRow'

interface Props {
  sticky?: boolean
  zIndex?: number
  fullWidth?: boolean
  inverted?: boolean
}

const CSS_HANDLES = [
  'headerRowContainer',
  'headerRow',
  'headerRowBackground',
  'headerRowContentContainer',
] as const

const Row: FunctionComponent<Props> = ({
  children,
  sticky,
  zIndex,
  fullWidth,
  inverted,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const content = (
    <div className={`${handles.headerRowContainer} w-100 flex items-center`}>
      {children}
    </div>
  )

  return (
    <StickyRow sticky={sticky} zIndex={zIndex}>
      <div className={handles.headerRow}>
        <div
          className={classNames(
            `${handles.headerRowBackground} w-100`,
            inverted
              ? 'bg-base--inverted c-on-base--inverted'
              : 'bg-base c-on-base'
          )}
        >
          {fullWidth ? (
            content
          ) : (
            <Container
              className={`${handles.headerRowContentContainer} w-100 flex`}
            >
              {content}
            </Container>
          )}
        </div>
      </div>
    </StickyRow>
  )
}

export default Row
