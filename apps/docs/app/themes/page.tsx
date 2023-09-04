"use client";
import {
  CalendarIcon,
  FaceSmileIcon,
  CalculatorIcon,
  UserIcon,
  CreditCardIcon,
  Cog8ToothIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  Text,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertIcon,
  AlertTitle,
  Avatar,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  DatePicker,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
  FieldControl,
  InputField,
  Label,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Kbd,
  ListItem,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
  PasswordField,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  RangePicker,
  ScrollArea,
  Select,
  SelectItem,
  Skeleton,
  Spinner,
  Stat,
  StatHelpText,
  StatIcon,
  StatLabel,
  StatValue,
  Switch,
  Tab,
  TabContent,
  TabList,
  TabTrigger,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  Tag,
  TagField,
  Td,
  Textarea,
  Th,
  Toast,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Tr,
  OrderedList,
} from "@rafty/ui";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Masonry from "react-responsive-masonry";
import DrawerOpen from "./DrawerOpen";

enum ColorTheme {
  ORANGE = "orange",
  GREEN = "green",
}

export default function Home() {
  const [theme, setTheme] = useState<ColorTheme>();

  return (
    <div className={`max-w-7xl mx-auto p-4 w-full `} id="demotheme">
      <h1 className="text-4xl font-semibold">
        Beautifully designed components built using Rafty UI and Tailwind CSS
      </h1>
      <div className="p-3 flex items-center gap-4 justify-end">
        Themes
        <Button
          size="icon"
          className="!bg-orange-500"
          onClick={() => setTheme(ColorTheme.ORANGE)}
        />
        <Button
          size="icon"
          className="!bg-green-500"
          onClick={() => setTheme(ColorTheme.GREEN)}
        />
        <Button
          size="icon"
          className="!bg-blue-500"
          onClick={() => setTheme(ColorTheme.ORANGE)}
        />
        <Button
          size="icon"
          className="!bg-red-500"
          onClick={() => setTheme(ColorTheme.ORANGE)}
        />
      </div>
      <Masonry columnsCount={3} gutter="70px" className="mt-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </AccordionTrigger>
            <AccordionContent data-cy="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              <span className="flex-1 text-left">Section 2 title</span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex gap-4">
          <Button colorScheme="primary">Button</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <DatePicker />
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
            <AlertDialogCancel asChild>
              <Button className="w-max">Close</Button>
            </AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
        <Alert>
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <div className="h-22 w-22">
          <Avatar
            size="lg"
            name="Jhon"
            src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <Card>
          <CardHeader>Customer dashboard</CardHeader>
          <CardContent>
            View a summary of all your customers over the last month. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            eveniet culpa minima ipsa rem in mollitia inventore laboriosam
            necessitatibus itaque.
          </CardContent>
          <CardFooter className="flex">
            <Button variant="outline" colorScheme="error">
              Delete
            </Button>
            <div className="flex-1" />
            <Button variant="outline">View here</Button>
          </CardFooter>
        </Card>
        <Checkbox>Checkbox</Checkbox>
        <ContextMenu>
          <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] border-2 border-dotted dark:border-secondary-700">
            Right Click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem>Show Bookmarks</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioGroup>
              <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
              <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
        <Dialog>
          <DialogTrigger>open</DialogTrigger>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>Dialog Header</DialogHeader>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
            <div className="flex items-center justify-end pt-5">
              <Button>Save Change</Button>
            </div>
          </DialogContent>
        </Dialog>
        <DrawerOpen />
        <Command className="rounded-lg border dark:border-secondary-700 shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceSmileIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <CalculatorIcon className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Cog8ToothIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <FieldControl name="name">
          <Label>Name</Label>
          <InputField />
        </FieldControl>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Image
              width={50}
              height={50}
              className="block h-16 w-16 rounded-full"
              src="https://i.pinimg.com/1200x/db/9b/f5/db9bf5ebc394015d62141539ed1bfd7c.jpg"
              alt="Rafty UI"
            />
          </HoverCardTrigger>
          <HoverCardContent className="w-[300px] not-prose space-y-4">
            <Image
              width={50}
              height={50}
              className="h-14 w-14 rounded-full"
              src="https://i.pinimg.com/1200x/db/9b/f5/db9bf5ebc394015d62141539ed1bfd7c.jpg"
              alt="Rafty UI"
            />
            <div className="flex flex-col gap-4">
              <Text>Rafty</Text>
              <Text>@Rafty/ui</Text>
              <Text>
                Components, icons, colors, and templates for building
                high-quality, accessible UI. Free and open-source.
              </Text>
              <div className="flex gap-[15px]">
                <div className="flex gap-[5px]">
                  <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                    0
                  </div>
                  <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                    Following
                  </div>
                </div>
                <div className="flex gap-[5px]">
                  <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                    2,900
                  </div>
                  <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                    Followers
                  </div>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <InputField variant="solid" placeholder="Enter a Value" />
        <Kbd>shift + K</Kbd>
        <Label>Sample</Label>
        <OrderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </OrderedList>
        <Menu>
          <MenuTrigger rightIcon={<HiOutlineChevronDown />}>
            Actions
          </MenuTrigger>
          <MenuContent>
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>New Private Window </MenuItem>
          </MenuContent>
        </Menu>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger variant="ghost">File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarItem>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger variant="ghost">Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web…</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find…</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger variant="ghost">View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem>Reload</MenubarItem>
              <MenubarItem>Force Reload</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger variant="ghost">Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="1">
                <MenubarRadioItem value="1">Andy</MenubarRadioItem>
                <MenubarRadioItem value="2">Benolt</MenubarRadioItem>
                <MenubarRadioItem value="3">Luis</MenubarRadioItem>
                <MenubarSeparator />
                <MenubarItem>Edit…</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Add Profile…</MenubarItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuListItem href="#" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </NavigationMenuListItem>
                <NavigationMenuListItem href="#" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </NavigationMenuListItem>
                <NavigationMenuListItem href="#" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </NavigationMenuListItem>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 w-[600px]">
                  <NavigationMenuListItem title="Introduction" href="#">
                    Build high-quality, accessible design systems and web apps.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem title="Getting started" href="#">
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem title="Styling" href="#">
                    Unstyled and compatible with any styling solution.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem title="Animation" href="#">
                    Use CSS keyframes or any animation library of your choice.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem title="Accessibility" href="#">
                    Tested in a range of browsers and assistive technologies.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem title="Releases" href="#">
                    Radix Primitives releases and their changelogs.
                  </NavigationMenuListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="https://github.com/rhinobase/raftyui">
                Github
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <PasswordField />
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>
            <div>Popover Content</div>
          </PopoverContent>
        </Popover>
        <div>
          <Progress size="lg" value={80} colorScheme="primary" />
        </div>
        <RadioGroup>
          <div className="flex flex-col gap-4">
            <RadioGroupItem value="1">Radio 1</RadioGroupItem>
            <RadioGroupItem value="2">Radio 2</RadioGroupItem>
            <RadioGroupItem value="3">Radio 3</RadioGroupItem>
          </div>
        </RadioGroup>
        <RangePicker />
        <ScrollArea />
        <Select>
          <SelectItem key="option1">Option 1</SelectItem>
          <SelectItem key="option2">Option 2</SelectItem>
          <SelectItem key="option3">Option 3</SelectItem>
        </Select>
        <Skeleton className="h-8 w-full" />
        <div className="flex justify-center items-center gap-6">
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </div>

        <Switch />
        <Tab defaultValue="tab1">
          <TabList>
            <TabTrigger value="tab1">Tab1</TabTrigger>
            <TabTrigger value="tab2">Tab2</TabTrigger>
          </TabList>
          <TabContent value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
          <TabContent value="tab2" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
        </Tab>
        <Stat type="decrease">
          <StatLabel>Daily Return</StatLabel>
          <StatValue>17,770.90</StatValue>
          <StatHelpText>
            <StatIcon /> 0.47%
          </StatHelpText>
        </Stat>
        <TableContainer>
          <Table>
            <TableHead>
              <Tr>
                <Th>To Convert</Th>
                <Th>Into</Th>
                <Th>Multiply By</Th>
              </Tr>
            </TableHead>
            <TableBody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
            </TableBody>
            <TableFooter>
              <Tr>
                <Th>To Convert</Th>
                <Th>Into</Th>
                <Th>Multiply By</Th>
              </Tr>
            </TableFooter>
          </Table>
        </TableContainer>
        <TagField />
        <Tag>Tag text</Tag>
        <Text className="text-lg"> In love with React & Next</Text>
        <Textarea placeholder="placeholder" />
        <Toast title="Success Banner" severity="success" />
        <ToggleGroup type="single">
          <ToggleGroupItem value="1">1</ToggleGroupItem>
          <ToggleGroupItem value="2">2</ToggleGroupItem>
          <ToggleGroupItem value="3">3</ToggleGroupItem>
        </ToggleGroup>
        <Toggle>Sample</Toggle>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="fab">
              <PlusIcon className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Hover Me!</TooltipContent>
        </Tooltip>
      </Masonry>
    </div>
  );
}
