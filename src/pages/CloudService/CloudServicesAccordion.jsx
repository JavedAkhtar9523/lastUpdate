import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; 


const CustomAccordion = ({ title, content, eventKey, customClass }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleAccordion = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={customClass}>
      <div
        className="accordion-header"
        onClick={toggleAccordion} 
        style={{
          color: '#0c2d48',
          fontWeight: 'semibold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom:'1rem'
        }}
      >
        {title} 
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      {isOpen && <div className="accordion-body text-small">{content}</div>} 
    </div>
  );
};

CustomAccordion.defaultProps = {
  customClass: '', 
};

const CloudServicesAccordion = () => {
  return (
    <div>
      <CustomAccordion 
        title="Cloud Migration & Integration" 
        content="We help businesses transition smoothly to the cloud, migrating your data, applications, and workloads while minimizing disruption."
        customClass="no-border"
      />

      <CustomAccordion 
        title="Data Backup & Disaster Recovery"
        content="We provide reliable backup solutions and disaster recovery plans that ensure your business data is always protected, even in case of unexpected events."
        customClass="no-border"
      />

      <CustomAccordion 
        title="Cloud Security & Compliance"
        content="We implement industry-leading security measures to protect your cloud infrastructure and ensure compliance with data protection regulations."
        customClass="no-border"
      />

      <CustomAccordion 
        title="Infrastructure as a Service (IaaS)"
        content="Our IaaS offerings provide flexible, scalable cloud resources that allow businesses to avoid the costs and complexities of managing physical servers."
        customClass="no-border"
      />

      <CustomAccordion 
        title="Cost Optimization & Resource Management"
        content="We help you optimize cloud usage to reduce costs while ensuring high performance and availability of resources, all managed through a centralized platform."
        customClass="no-border"
      />
    </div>
  );
};

export default CloudServicesAccordion;
