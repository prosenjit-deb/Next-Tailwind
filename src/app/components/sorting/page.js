import * as React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { Toggle } from "@/components/ui/toggle"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

export default function sortComponent() {

    return (
        <div className='flex items-center w-full'>
            <Toggle aria-label="Toggle italic">
                <BiSortAlt2 className="h-4 w-4" />
            </Toggle>
            <div className='flex w-1/2 items-center'>
                <Label htmlFor="straight" className='text-black font-medium text-[13px] w-1/3 whitespace-nowrap'>Sort By: </Label>
                <Select>
                    <SelectTrigger className='bg-transparent border-0'>
                    <SelectValue placeholder="Newest First" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="est">Newest First</SelectItem>
                        <SelectItem value="cst">Old First</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='ml-3'>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button className='flex items-center gap-2 rounded-[50px] text-black text-sm font-medium custom-dropdown'>
                            <CiFilter />
                            <span>Filter</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}