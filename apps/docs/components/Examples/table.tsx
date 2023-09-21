import {
  TableContainer,
  TableHead,
  Tr,
  Th,
  TableBody,
  Td,
  TableFooter,
  Table,
} from "@rafty/ui";

export const table_examples = {
  "table:usage": (
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
  ),
  "table:variant": (
    <TableContainer>
      <Table variant="striped">
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
  ),
  "table:size": (
    <TableContainer>
      <Table size="sm">
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
  ),
  "table:container": (
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
  ),
  "table:barebone": (
    <TableContainer>
      <Table
        isBarebone
        className="divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y"
      >
        <TableHead className="bg-secondary-100 dark:bg-secondary-700/80">
          <Tr>
            <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
              To Convert
            </Th>
            <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
              Into
            </Th>
            <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
              Multiply By
            </Th>
          </Tr>
        </TableHead>
        <TableBody className="dark:bg-secondary-700/40 bg-white">
          <Tr>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              inches
            </Td>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              millimetres (mm)
            </Td>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              25.4
            </Td>
          </Tr>
          <Tr>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              feet
            </Td>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              centimetres (cm)
            </Td>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              30.48
            </Td>
          </Tr>
          <Tr>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              yards
            </Td>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              metres (m)
            </Td>
            <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
              0.91444
            </Td>
          </Tr>
        </TableBody>
        <TableFooter className="bg-secondary-100 dark:bg-secondary-700/80">
          <Tr>
            <Th className="py-3text-secondary-600 dark:text-secondary-300 px-4 text-left text-sm font-semibold">
              To Convert
            </Th>
            <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
              Into
            </Th>
            <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
              Multiply By
            </Th>
          </Tr>
        </TableFooter>
      </Table>
    </TableContainer>
  ),
  "table:unstyled": (
    <TableContainer>
      <Table>
        <TableHead isUnstyled className="bg-transparent">
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
  ),
};
