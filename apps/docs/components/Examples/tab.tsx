import { Tab, TabContent, TabList, TabTrigger } from "@rafty/ui";

export const tab_examples = {
  "tab:usage": (
    <Tab defaultValue="tab1">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
        nulla ipsum tempore, ad, voluptatibus necessitatibus blanditiis enim
        nemo commodi temporibus nostrum dolor suscipit exercitationem molestias
        distinctio. Esse, ad explicabo.
      </TabContent>
      <TabContent value="tab2" className="p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ex
        nostrum accusamus, harum aperiam consectetur assumenda excepturi,
        placeat maxime totam libero natus quis minima, laboriosam incidunt
        repellendus ratione animi repudiandae.
      </TabContent>
    </Tab>
  ),

  "tab:size": (
    <Tab size="sm">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        pariatur expedita incidunt veniam temporibus ipsum culpa blanditiis
        nemo! Error ea facere quod fuga voluptatum accusamus totam neque
        laboriosam expedita ducimus.
      </TabContent>
      <TabContent value="tab2" className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sapiente.
        Eius facilis voluptate repellendus, tempora aliquam ipsum distinctio
        aliquid eum fuga pariatur delectus odit adipisci voluptatum error
        cupiditate iusto laboriosam!
      </TabContent>
    </Tab>
  ),
  "tab:variant": (
    <Tab defaultValue="tab1" variant="enclosed">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        placeat officiis hic itaque numquam sequi fugiat similique esse
        reiciendis? Corrupti atque ducimus quas at numquam iste nostrum modi
        nesciunt eius.
      </TabContent>
      <TabContent value="tab2" className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores
        excepturi unde, laboriosam natus odit itaque. Necessitatibus, corrupti
        itaque tempore aut ut voluptates! Doloribus, enim quidem dolore culpa
        adipisci reprehenderit
      </TabContent>
    </Tab>
  ),

  "tab:Orientation-line": (
    <Tab defaultValue="tab1" orientation="vertical">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci
        fuga mollitia, quia neque rem, blanditiis possimus ducimus at nulla nam
        cumque veritatis laudantium accusantium quae ex perspiciatis facere
        aperiam.
      </TabContent>
      <TabContent value="tab2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        quis placeat, officia labore quas voluptas quisquam asperiores ut. Est
        nostrum incidunt perferendis iste facere rem expedita dolorem quod
        asperiores sed.
      </TabContent>
    </Tab>
  ),
  "tab:Orientation-enclosed": (
    <Tab defaultValue="tab1" orientation="vertical" variant="enclosed">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quasi
        id nesciunt ipsam quaerat ad quod sunt provident! Quidem quod velit ut
        corporis dolore ipsum, rerum provident magnam impedit nisi.
      </TabContent>
      <TabContent value="tab2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        suscipit est rerum ullam rem quos quo veniam maxime! Eius labore porro
        dolor, ad accusamus vel culpa delectus non at quae!
      </TabContent>
    </Tab>
  ),
  "tab:barebone": (
    <Tab
      defaultValue="tab1"
      isBarebone
      className="flex w-full items-stretch md:flex-col"
    >
      <TabList className="dark:border-secondary-700 border-b dark:border-black">
        <TabTrigger
          value="tab1"
          className="text-secondary-500 dark:text-secondary-400 data-[state=active]:dark:text-secondary-100
          data-[disabled]:text-secondary-400 data-[disabled]:dark:text-secondary-600
          p-4 transition-colors data-[disabled]:cursor-not-allowed
          data-[state=active]:border-b-2 data-[state=active]:border-blue-500
          data-[state=active]:text-black dark:data-[state=active]:border-blue-400"
        >
          Tab1
        </TabTrigger>
        <TabTrigger
          value="tab2"
          className="text-secondary-500 dark:text-secondary-400 data-[state=active]:dark:text-secondary-100
          data-[disabled]:text-secondary-400 data-[disabled]:dark:text-secondary-600
          p-4 transition-colors data-[disabled]:cursor-not-allowed
          data-[state=active]:border-b-2 data-[state=active]:border-blue-500
          data-[state=active]:text-black dark:data-[state=active]:border-blue-400"
        >
          Tab2
        </TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
        nulla velit asperiores expedita error assumenda tempore ut dolores
        commodi minima incidunt cupiditate hic earum nemo, sunt porro, nobis
        distinctio recusandae.
      </TabContent>
      <TabContent value="tab2" className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum
        earum minus, aliquid doloremque optio harum odio repellat! Doloribus
        consectetur facere, repellendus omnis rerum dicta consequuntur iure
        dignissimos. Numquam, accusamus?
      </TabContent>
    </Tab>
  ),
  "tab:unstyled": (
    <Tab defaultValue="tab1">
      <TabList
        isUnstyled
        className="border-secondary-200 dark:border-secondary-700 border-b"
      >
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut
        veniam sequi totam accusantium beatae hic doloribus facilis qui cum,
        explicabo iste distinctio! Nostrum sunt incidunt consequatur in
        quibusdam assumenda.
      </TabContent>
      <TabContent value="tab2" className="p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        alias eius voluptas ratione dolorum accusantium cum quam eum labore
        debitis. Ipsum, soluta? Numquam, minima fuga. Libero incidunt doloremque
        qui omnis.
      </TabContent>
    </Tab>
  ),
};
