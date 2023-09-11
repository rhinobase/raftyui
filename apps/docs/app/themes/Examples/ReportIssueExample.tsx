import { useState } from "react";
import {
  Text,
  CommandItem,
  InputField,
  Label,
  Textarea,
  Button,
  FieldControl,
} from "@rafty/ui";
import { HiCheck } from "react-icons/hi";
import { Selector } from "./Selector";

const ROLES = ["team", "billing", "account", "deployments", "support"];
const SEVERITYS = [
  "severity 1",
  "severity 2",
  "severity 3",
  "severity 4",
  "severity 5",
];

export function ReportIssueExample() {
  return (
    <div className="space-y-4">
      <div>
        <Text className="font-semibold text-2xl leading-snug">
          Report an issue
        </Text>
        <Text className="opacity-60 text-sm">
          What area are you having problems with?
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FieldControl name="team">
          <Label>Team</Label>
          <RoleSelector />
        </FieldControl>
        <FieldControl name="security">
          <Label>Security Level</Label>
          <SecurityLevel />
        </FieldControl>
      </div>
      <FieldControl name="subject">
        <Label>Subject</Label>
        <InputField placeholder="I need help with..." />
      </FieldControl>
      <FieldControl name="description">
        <Label>Description</Label>
        <Textarea placeholder="Please include all information relevant to your issue." />
      </FieldControl>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <Button variant="outline" className="mb-2 sm:mb-0">
          Cancel
        </Button>
        <Button variant="solid" colorScheme="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}

function RoleSelector() {
  const [selected, setSelected] = useState(ROLES[0]);

  return (
    <Selector value={selected}>
      {ROLES.map((role) => (
        <CommandItem key={role} value={role} onSelect={setSelected}>
          <div className="flex items-center gap-2 w-full">
            <Text className="capitalize">{role}</Text>
            <div className="flex-1" />
            {selected == role && <HiCheck className="opacity-60" />}
          </div>
        </CommandItem>
      ))}
    </Selector>
  );
}

function SecurityLevel() {
  const [selected, setSelected] = useState(SEVERITYS[0]);

  return (
    <Selector value={selected}>
      {SEVERITYS.map((severity) => (
        <CommandItem key={severity} value={severity} onSelect={setSelected}>
          <div className="flex items-center gap-2 w-full">
            <Text className="capitalize">{severity}</Text>
            <div className="flex-1" />
            {selected == severity && <HiCheck className="opacity-60" />}
          </div>
        </CommandItem>
      ))}
    </Selector>
  );
}
