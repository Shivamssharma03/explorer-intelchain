import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import SearchBar from "../../../components/SearchBar";
import ShardComponent from "../../../components/ShardComponent";
import { GrStatusInfo } from "react-icons/gr";

const ContractVerificationForm = () => {
  const [verificationMethod, setVerificationMethod] = useState("");
  const [formData, setFormData] = useState({
    contractAddress: "",
    license: "",
    // Vyper Contract Fields
    vyperContractName: "",
    vyperCompilerVersion: "",
    vyperEVMVersion: "default",
    vyperContractCode: "",
    // Solidity Standard JSON Fields
    solidityIncludeNightly: false,
    solidityCompilerVersion: "",
    solidityStandardJSONFile: null,
    // Vyper Multipart Fields
    vyperMultipartCompilerVersion: "",
    vyperMultipartEVMVersion: "default",
    vyperMainSource: null,
    vyperInterfaces: null,
    // Solidity Multipart Fields
    solidityMultipartIncludeNightly: false,
    solidityMultipartCompilerVersion: "",
    solidityMultipartEVMVersion: "default",
    solidityMultipartOptimizationEnabled: true,
    solidityMultipartOptimizationValue: 200,
    solidityMultipartSources: null,
    solidityMultipartAddLibraries: false,
    // Solidity Flattened Fields
    solidityFlattenedIsYul: false,
    solidityFlattenedIncludeNightly: false,
    solidityFlattenedCompilerVersion: "",
    solidityFlattenedEVMVersion: "default",
    solidityFlattenedOptimizationEnabled: true,
    solidityFlattenedOptimizationValue: 200,
    solidityFlattenedContractCode: "",
    solidityFlattenedAddLibraries: false,
    // Vyper Standard JSON Fields
    vyperStandardIncludeNightly: false,
    vyperStandardCompilerVersion: "",
    vyperStandardJSONFile: null,
  });

  const tooltipContent = `Currently, Blockscout supports 6 methods:
1. Verification through flattened source code.
2. Verification using Standard input JSON file.
3. Verification of multi-part Solidity files.
4. Verification of Vyper contract.
5. Verification of multi-part Vyper files.
6. Verification of Vyper contract using Standard input JSON file.`;

  const formattedTooltip = tooltipContent.replace(
    /Standard input JSON/g,
    '<span class="text-[#e29a2f]">Standard input JSON</span>'
  );

  const handleVerificationMethodChange = (e) => {
    const value = e.target.value;
    console.log("Selected verification method:", value); // Debugging line
    setVerificationMethod(value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your verification logic here
    console.log("Form Data Submitted:", formData);
    // Example: Send formData to your backend API
    // const response = await fetch("/api/verify-contract", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const result = await response.json();
    // Handle the result as needed
  };

  // --- Subcomponents ---

  // Input Field Component
  const InputField = ({
    label,
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    textarea,
    description,
  }) => (
    <div>
      {label && (
        <label className={`block text-sm font-medium mb-2 text-white`}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          name={name}
          className={`w-full bg-[#070136] border border-gray-700  hover:border-[#d79441] rounded-md py-2 md:py-44 px-4 text-sm h-40 font-light text-white outline-[#ff9700]`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          className={`w-full  bg-[#070136] border border-gray-700 hover:border-[#d79441] rounded-md py-2 md:py-6 px-4 text-sm font-light text-white outline-[#ff9700]`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {description && (
        <p
          className="text-xs text-gray-500 mt-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );

  // Select Field Component
  const SelectField = ({ label, name, options, value, onChange, description }) => (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2 text-white">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          name={name}
          className="w-full  bg-[#070136] border border-gray-700 hover:border-[#d79441] rounded-md py-2 md:py-6 px-4 appearance-none text-sm font-light text-gray-300 outline-[#ff9700]"
          value={value}
          onChange={onChange}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-2.5 text-gray-500 h-5 w-5" />
      </div>
      {description && (
        <p
          className="text-xs text-gray-500 mt-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );

  // Checkbox Component
  const CheckboxField = ({ label, name, checked, onChange }) => (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        className="form-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm font-normal text-gray-200">{label}</span>
    </label>
  );

  // File Upload Component
  const FileUpload = ({ label, name, onChange, description }) => (
    <div className="border border-dashed border-gray-700 rounded-md p-4">
      <p className="text-sm mb-2 font-normal">{label}</p>
      <input
        type="file"
        name={name}
        className="hidden"
        onChange={onChange}
        id={name}
      />
      <label
        htmlFor={name}
        className="bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-thin cursor-pointer"
      >
        Drop file or click here
      </label>
      {description && (
        <p
          className="text-xs text-gray-500 mt-2"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );

  // Verify & Publish Button Component
  const VerifyButton = () => (
    <button
      type="submit"
      className="bg-[#ff9700] text-white py-2 px-4 rounded-md text-sm hover:bg-[#ff9900e6] transition-colors"
    >
      Verify & publish
    </button>
  );

  // --- End of Subcomponents ---

  const renderVerificationFields = () => {
    switch (verificationMethod) {
      case "vyper-contract":
        return (
          <>
            <InputField
              label="Contract name*"
              name="vyperContractName"
              placeholder="Enter contract name"
              value={formData.vyperContractName}
              onChange={handleInputChange}
              description="The contract name is the name assigned to the verified contract in Blockscout."
            />
            <SelectField
              label="Compiler (enter version or use the dropdown)*"
              name="vyperCompilerVersion"
              options={[
                { value: "0.2.0", label: "0.2.0" },
                { value: "0.2.1", label: "0.2.1" },
                // Add more compiler versions as needed
              ]}
              value={formData.vyperCompilerVersion}
              onChange={handleInputChange}
            />
            <SelectField
              label="EVM Version*"
              name="vyperEVMVersion"
              options={[
                { value: "default", label: "default" },
                { value: "istanbul", label: "istanbul" },
                { value: "berlin", label: "berlin" },
                // Add other EVM versions as needed
              ]}
              value={formData.vyperEVMVersion}
              onChange={handleInputChange}
              description='The EVM version the contract is written for. If the bytecode does not match the version, we try to verify using the latest EVM version. <a href="#" class="text-[#ff9700]">EVM version details</a>'
            />
            <InputField
              label="Contract code*"
              name="vyperContractCode"
              placeholder="// Enter your Vyper contract code here"
              value={formData.vyperContractCode}
              onChange={handleInputChange}
              textarea
            />
            <VerifyButton />
          </>
        );
      case "solidity-standard-json":
        return (
          <>
            <div className="flex items-center space-x-4 mb-4">
              <CheckboxField
                label="Include nightly builds"
                name="solidityIncludeNightly"
                checked={formData.solidityIncludeNightly}
                onChange={handleInputChange}
              />
            </div>
            <SelectField
              label="Compiler (enter version or use the dropdown)*"
              name="solidityCompilerVersion"
              options={[
                { value: "0.8.0", label: "0.8.0" },
                { value: "0.8.1", label: "0.8.1" },
                // Add more compiler versions as needed
              ]}
              value={formData.solidityCompilerVersion}
              onChange={handleInputChange}
              description="The compiler version is specified in pragma solidity X.X.X. Use the compiler version rather than the nightly build. If using the Solidity compiler, run <code>solc --version</code> to check."
            />
            <FileUpload
              label="Standard Input JSON"
              name="solidityStandardJSONFile"
              onChange={handleFileChange}
              description="Upload the standard input JSON file created during contract compilation."
            />
            <VerifyButton />
          </>
        );
      case "vyper-multipart":
        return (
          <>
            <SelectField
              label="Compiler (enter version or use the dropdown)*"
              name="vyperMultipartCompilerVersion"
              options={[
                { value: "0.2.0", label: "0.2.0" },
                { value: "0.2.1", label: "0.2.1" },
                // Add more compiler versions as needed
              ]}
              value={formData.vyperMultipartCompilerVersion}
              onChange={handleInputChange}
            />
            <SelectField
              label="EVM Version*"
              name="vyperMultipartEVMVersion"
              options={[
                { value: "default", label: "default" },
                { value: "istanbul", label: "istanbul" },
                { value: "berlin", label: "berlin" },
                // Add other EVM versions as needed
              ]}
              value={formData.vyperMultipartEVMVersion}
              onChange={handleInputChange}
            />
            <FileUpload
              label="Upload main *.vy source"
              name="vyperMainSource"
              onChange={handleFileChange}
            />
            <FileUpload
              label="Interfaces (.vy or .json)"
              name="vyperInterfaces"
              onChange={handleFileChange}
            />
            <VerifyButton />
          </>
        );
      case "solidity-multipart":
        return (
          <>
            <div className="flex items-center space-x-4 mb-4">
              <CheckboxField
                label="Include nightly builds"
                name="solidityMultipartIncludeNightly"
                checked={formData.solidityMultipartIncludeNightly}
                onChange={handleInputChange}
              />
            </div>
            <SelectField
              label="Compiler (enter version or use the dropdown)*"
              name="solidityMultipartCompilerVersion"
              options={[
                { value: "0.8.0", label: "0.8.0" },
                { value: "0.8.1", label: "0.8.1" },
                // Add more compiler versions as needed
              ]}
              value={formData.solidityMultipartCompilerVersion}
              onChange={handleInputChange}
            />
            <SelectField
              label="EVM Version*"
              name="solidityMultipartEVMVersion"
              options={[
                { value: "default", label: "default" },
                { value: "istanbul", label: "istanbul" },
                { value: "berlin", label: "berlin" },
                // Add other EVM versions as needed
              ]}
              value={formData.solidityMultipartEVMVersion}
              onChange={handleInputChange}
            />
            <div className="flex items-center space-x-4 mb-4">
              <CheckboxField
                label="Optimization enabled"
                name="solidityMultipartOptimizationEnabled"
                checked={formData.solidityMultipartOptimizationEnabled}
                onChange={handleInputChange}
              />
              <InputField
                label=""
                type="number"
                name="solidityMultipartOptimizationValue"
                placeholder=""
                value={formData.solidityMultipartOptimizationValue}
                onChange={handleInputChange}
              />
            </div>
            <FileUpload
              label="Sources *.sol or *.yul files"
              name="solidityMultipartSources"
              onChange={handleFileChange}
            />
            <div className="flex items-center space-x-4 mt-4">
              <CheckboxField
                label="Add contract libraries"
                name="solidityMultipartAddLibraries"
                checked={formData.solidityMultipartAddLibraries}
                onChange={handleInputChange}
              />
            </div>
            <VerifyButton />
          </>
        );
      case "solidity-flattened":
        return (
          <>
            <div className="flex items-center space-x-4 mb-4">
              <CheckboxField
                label="Is Yul contract"
                name="solidityFlattenedIsYul"
                checked={formData.solidityFlattenedIsYul}
                onChange={handleInputChange}
              />
              <CheckboxField
                label="Include nightly builds"
                name="solidityFlattenedIncludeNightly"
                checked={formData.solidityFlattenedIncludeNightly}
                onChange={handleInputChange}
              />
            </div>
            <SelectField
              label="Compiler (enter version or use the dropdown)*"
              name="solidityFlattenedCompilerVersion"
              options={[
                { value: "0.8.0", label: "0.8.0" },
                { value: "0.8.1", label: "0.8.1" },
                // Add more compiler versions as needed
              ]}
              value={formData.solidityFlattenedCompilerVersion}
              onChange={handleInputChange}
            />
            <SelectField
              label="EVM Version*"
              name="solidityFlattenedEVMVersion"
              options={[
                { value: "default", label: "default" },
                { value: "istanbul", label: "istanbul" },
                { value: "berlin", label: "berlin" },
                // Add other EVM versions as needed
              ]}
              value={formData.solidityFlattenedEVMVersion}
              onChange={handleInputChange}
            />
            <div className="flex items-center space-x-4 mb-4">
              <CheckboxField
                label="Optimization enabled"
                name="solidityFlattenedOptimizationEnabled"
                checked={formData.solidityFlattenedOptimizationEnabled}
                onChange={handleInputChange}
              />
              <InputField
                label=""
                type="number"
                name="solidityFlattenedOptimizationValue"
                placeholder=""
                value={formData.solidityFlattenedOptimizationValue}
                onChange={handleInputChange}
              />
            </div>
            <InputField
              label="Contract code*"
              name="solidityFlattenedContractCode"
              placeholder="// Enter your flattened Solidity code here"
              value={formData.solidityFlattenedContractCode}
              onChange={handleInputChange}
              textarea
            />
            <div className="flex items-center space-x-4 mt-4">
              <CheckboxField
                label="Add contract libraries"
                name="solidityFlattenedAddLibraries"
                checked={formData.solidityFlattenedAddLibraries}
                onChange={handleInputChange}
              />
            </div>
            <VerifyButton />
          </>
        );
      case "vyper-standard-json":
        return (
          <>
            <div className="flex items-center space-x-4 mb-4">
              <CheckboxField
                label="Include nightly builds"
                name="vyperStandardIncludeNightly"
                checked={formData.vyperStandardIncludeNightly}
                onChange={handleInputChange}
              />
            </div>
            <SelectField
              label="Compiler (enter version or use the dropdown)*"
              name="vyperStandardCompilerVersion"
              options={[
                { value: "0.2.0", label: "0.2.0" },
                { value: "0.2.1", label: "0.2.1" },
                // Add more compiler versions as needed
              ]}
              value={formData.vyperStandardCompilerVersion}
              onChange={handleInputChange}
            />
            <FileUpload
              label="Standard Input JSON"
              name="vyperStandardJSONFile"
              onChange={handleFileChange}
              description=""
            />
            <VerifyButton />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form
      className=" dark:bg-[#070136] dark:text-gray-100 bg-white text-black min-h-screen max-w-screen-2xl w-full mx-auto p-14 mb-5"
      onSubmit={handleSubmit}
    >
      <div className="mb-9 mt-9">
        <SearchBar />
      </div>
      

      <div className="mb-8 ">
        <h1 className="text-2xl sm:text-4xl  dark:text-white text-black font-normal mb-4">
          Verify & publish contract
          
        </h1>
        
        
      </div>

      <div className="space-y-4">
        {/* Static fields */}
        <div>
          <label className="block text-white font-medium text-sm mb-2">
            Contract address to verify
          </label>
          <InputField
            label=""
            name="contractAddress"
            placeholder="Smart contract / Address (0x...)*"
            value={formData.contractAddress}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <SelectField
            label="Select license"
            name="license"
            options={[
              { value: "No License (None)", label: "No License (None)" },
              { value: "The Unlicense (Unlicense)", label: "The Unlicense (Unlicense)" },
              { value: "MIT License (MIT)", label: "MIT License (MIT)" },
              { value: "GNU General Public License v2.0 (GNU GPLv2)", label: "GNU General Public License v2.0 (GNU GPLv2)" },
              { value: "GNU General Public License v3.0 (GNU GPLv3)", label: "GNU General Public License v3.0 (GNU GPLv3)" },
              { value: "GNU Lesser General Public License v2.1 (GNU LGPLv2.1)", label: "GNU Lesser General Public License v2.1 (GNU LGPLv2.1)" },
              { value: "GNU Lesser General Public License v3.0 (GNU LGPLv3)", label: "GNU Lesser General Public License v3.0 (GNU LGPLv3)" },
              { value: "BSD 2-clause “Simplified” license (BSD-2-Clause)", label: "BSD 2-clause “Simplified” license (BSD-2-Clause)" },
              { value: "BSD 2-clause “New” or “Revised” license (BSD-3-Clause)", label: "BSD 2-clause “New” or “Revised” license (BSD-3-Clause)" },
              { value: "Mozilla Public License 2.0 (MPL-2.0)", label: "Mozilla Public License 2.0 (MPL-2.0)" },
              { value: "Open Software License 3.0 (OSL-3.0)", label: "Open Software License 3.0 (OSL-3.0)" },
              { value: "Apache 2.0 (Apache)", label: "Apache 2.0 (Apache)" },
              { value: "GNU Affero General Public License (GNU AGPLv3)", label: "GNU Affero General Public License (GNU AGPLv3)" },
              { value: "Business Source License (BSL 1.1)", label: "Business Source License (BSL 1.1)" },
              // Add other license options here
            ]}
            value={formData.license}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-start space-x-2 text-sm font-light dark:text-gray-300 text-black">
          <p>
            For best practices, all contract source code holders, publishers and
            authors are encouraged to also specify the accompanying license for
            their verified contract source code provided.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Currently, Blockscout supports 6 contract verification methods
            <span className="inline-block ml-1 relative group">
            <GrStatusInfo className=" inline-block ml-1 h-4 w-4 text-[#e29a2f]"/>
              <div className="absolute z-50 hidden group-hover:block bg-gray-900 text-white p-2 rounded shadow-lg  w-80 top-full left-1/2 transform -translate-x-1/2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: formattedTooltip.replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </span>
          </label>
          <SelectField
            label="Verification method (compiler type)*"
            name="verificationMethod"
            options={[
              
              {
                value: "solidity-flattened",
                label: "Solidity (Flattened source code)",
              },
              {
                value: "solidity-standard-json",
                label: "Solidity (Standard JSON input)",
              },
              {
                value: "solidity-multipart",
                label: "Solidity (Multi-part files)",
              },
              { value: "vyper-contract", label: "Vyper (Contract)" },
              {
                value: "vyper-multipart",
                label: "Vyper (Multi-part files)",
              },
              {
                value: "vyper-standard-json",
                label: "Vyper (Standard JSON input)",
              },
            ]}
            value={verificationMethod}
            onChange={handleVerificationMethodChange}
          />
        </div>

        {/* Dynamic fields */}
        {renderVerificationFields()}

        {/* Any additional static or dynamic fields */}
      </div>
    </form>
  );
};

export default ContractVerificationForm;
