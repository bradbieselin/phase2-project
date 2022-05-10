import React from 'react';
import SubmissionCard from './SubmissionCard';
import SubmissionForm from './SubmissionForm';

const SubmissionsContainer = ({ filteredSubmissions }) => {
    return (
        <div>
            {filteredSubmissions.map(submission => <SubmissionCard key={submission.id} image={submission.image} alt={submission.photographer} />)} 
        </div>
    );
};

export default SubmissionsContainer;