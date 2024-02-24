import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Slider } from "@/components/ui/slider";

export default function filter() {
    return (
        <div className='bg-white p-5 w-full rounded-sm'>
            <h2 className='capitalize text-black font-medium text-[16px]'>Filter</h2>
            <div className='mt-5'>
              <h3 className='text-black font-semibold text-[14px] mb-3'>Choose a Category</h3>
              <Select>
                <SelectTrigger className="w-full focus:outline-none">
                  <SelectValue placeholder="Click and Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">
                      Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                    <SelectItem value="ist_indonesia">
                      Indonesia Central Standard Time (WITA)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                      Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                      Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                      Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='mt-7'>
              <h3 className='text-black font-semibold text-[14px] mb-4'>Content Type:</h3>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="straight" id="straight" />
                  <Label htmlFor="straight" className='text-black font-medium text-[13px]'>Straight</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="gay" id="gay" />
                  <Label htmlFor="gay" className='text-black font-medium text-[13px]'>Gay</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="trans" id="trans" />
                  <Label htmlFor="trans" className='text-black font-medium text-[13px]'>Trans</Label>
                </div>
              </RadioGroup>
            </div>
            <div className='mt-8'>
              <h3 className='text-black font-semibold text-[14px] mb-4'>Model Attributes:</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>All Ages</AccordionTrigger>
                  <AccordionContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox id="free" />
                    <label
                      htmlFor="free"
                      className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Free
                    </label>
                  </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>All Ethnicities</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="free" />
                      <label
                        htmlFor="free"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>All Breast Sizes</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="free" />
                      <label
                        htmlFor="free"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>All Endowments</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="free" />
                      <label
                        htmlFor="free"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b-0">
                  <AccordionTrigger>All Body Colour</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="free" />
                      <label
                        htmlFor="free"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className='mt-7'>
              <h3 className='text-black font-semibold text-[14px] mb-4'>Price Range:</h3>
              <Slider
                range
                defaultValue={[30]} // Set initial range values
                max={100}
                step={1}
                className='custom-range'
              />
              <div className='flex items-center justify-between mt-3'>
                <div className='w-24'>
                  <Label htmlFor="min" className='text-black font-medium text-[13px]'>Min</Label>
                  <Input type="text"  placeholder="$1.00" />
                </div>
                <div className='w-24'>
                  <Label htmlFor="max" className='text-black font-medium text-[13px]'>Max</Label>
                  <Input type="text"  placeholder="$999.99" />
                </div>
              </div>
            </div>
            <div className='mt-7'>
              <h3 className='text-black font-semibold text-[14px] mb-4'>Other:</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>All Video Format</AccordionTrigger>
                    <AccordionContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="free" />
                      <label
                        htmlFor="free"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="vidsOnSale" />
                      <label
                        htmlFor="vidsOnSale"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Vids on Sale
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="previews" />
                      <label
                        htmlFor="previews"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Previews Available
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="membership" />
                      <label
                        htmlFor="membership"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Membership Only
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="sold" />
                      <label
                        htmlFor="sold"
                        className="text-[13px] text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Sold Separately
                      </label>
                    </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
        </div>
    ) 
}