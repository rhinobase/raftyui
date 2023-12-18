"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import {
  Button,
  CommandItem,
  FieldControl,
  InputField,
  Label,
  Text,
  Textarea,
} from "@rafty/ui";
import { useState } from "react";
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
        <Text className="text-2xl font-semibold leading-snug">
          Report an issue
        </Text>
        <Text className="text-sm opacity-60">
          What area are you having problems with?
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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

      <div className="flex justify-between">
        <Button variant="outline">Cancel</Button>
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
        <CommandItem
          aria-label="Select Roles"
          key={role}
          value={role}
          onSelect={setSelected}
        >
          <div className="flex w-full items-center gap-2">
            <Text className="capitalize">{role}</Text>
            <div className="flex-1" />
            {selected === role && (
              <CheckIcon height={16} width={16} className="opacity-60" />
            )}
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
        <CommandItem
          aria-label="Choose the Severity"
          key={severity}
          value={severity}
          onSelect={setSelected}
        >
          <div className="flex w-full items-center gap-2">
            <Text className="capitalize">{severity}</Text>
            <div className="flex-1" />
            {selected === severity && (
              <CheckIcon height={16} width={16} className="opacity-60" />
            )}
          </div>
        </CommandItem>
      ))}
    </Selector>
  );
}
