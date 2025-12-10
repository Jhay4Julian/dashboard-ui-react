import { Command } from 'cmdk'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from 'react-icons/fi'

const CommandMenu = ({
    open,
    setOpen,
}: {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {

    const [value, setValue] = useState('')

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className='fixed inset-0 bg-stone-950/50'
            onClick={() => setOpen(false)}
        >
            <div onClick={(e) => e.stopPropagation()}
                className='bg-white border border-stone-300 rounded-lg shadow-xl w-full max-w-lg mx-auto mt-20 overflow-hidden'
            >
                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    placeholder='Looking for something?'
                    className='relative border-b border-stone-300 w-full p-3 text-lg placeholder:text-stone-400 focus:outline-none'
                />
                <Command.List className='p-3'>
                    <Command.Empty>No results found for{" "}
                        <span className='text-violet-500'>"{value}"</span>
                    </Command.Empty>

                    <Command.Group heading="Team" className='text-sm mb-3 text-stone-500'>
                        <Command.Item className='flex items-center gap-2 cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded'>
                            <FiPlus />
                            Invite Member
                        </Command.Item>
                        <Command.Item className='flex items-center gap-2 cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded'>
                            <FiEye />
                            See Org Chart
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Integrations" className='text-sm mb-3 text-stone-500'>
                        <Command.Item className='flex items-center gap-2 cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded'>
                            <FiLink />
                            Link Services
                        </Command.Item>
                        <Command.Item className='flex items-center gap-2 cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded'>
                            <FiPhone />
                            Contact Support
                        </Command.Item>

                        <Command.Item className='flex items-center gap-2 cursor-pointer transition-colors p-2 text-sm text-stone-50 bg-stone-950 hover:bg-stone-700 rounded'>
                            <FiLogOut />
                            Sign Out
                        </Command.Item>
                        
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}

export default CommandMenu