import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source clone of the game Wordle.{' '}
        <a
          href="https://github.com/frankhereford/wordle"
          className="underline font-bold"
        >
          Fork of code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>
        .
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This build includes mods to reduce guesses to five and reset every hour.
      </p>
    </BaseModal>
  )
}
