import { useState } from "react"

export const useDialog = () => {
    const [openDialog, setOpen] = useState(false)


    return { openDialog, setOpen }
}