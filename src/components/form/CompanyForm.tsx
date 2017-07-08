import * as React from 'react';
import Company from '../../types/Company';
import FormElement from './form_element/FormElement';

export interface CompanyFormProps {
    initialCompany?: Company;
    onSubmit: (company: Company) => void;
}

export interface CompanyFormState {
    title: string;
    formKey: string;
    company: Company;
}

export default class CompanyForm extends React.Component<CompanyFormProps, CompanyFormState> {
    constructor(props: CompanyFormProps) {
        super(props);
        this.state = {
            title: props.initialCompany ? 'Edit Company' : 'Add Company',
            formKey: String((new Date()).getTime() / 1000),
            company: props.initialCompany ? props.initialCompany : { name: '', },
        };
    }

    handleFieldChange(name: string, value: any) {
        let newCompany = this.state.company;
        newCompany[name] = value;
        this.setState({ company: newCompany, });
    }

    handleMultiFieldChange(name: string, value: string[], primaryIndex: number) {
        let newCompany = this.state.company;
        newCompany[name] = value;
        newCompany['primary' + name[0].toUpperCase() + name.slice(1)] = primaryIndex;
        this.setState({ company: newCompany, });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // TODO validate all the input before adding it to state
        this.props.onSubmit(this.state.company);

        // reset the form
        this.resetForm();

        event.preventDefault();
    }

    resetForm() {
        // by changing the key of the form it should rerender everything
        this.setState({
            company: { name: '', },
            formKey: String((new Date()).getTime() / 1000),
        });
    }

    render() {
        return (
            <form key={this.state.formKey} className="form" onSubmit={this.handleSubmit}>
                <h1 className="form__title">{this.state.title}</h1>
                <FormElement
                    name="name"
                    label="Company Name:"
                    initialValue={this.state.company.name ? this.state.company.name : ''}
                    onChange={this.handleFieldChange}
                />
                <FormElement
                    name="website"
                    label="Website:"
                    initialValue={this.state.company.website ? this.state.company.website : ''}
                    onChange={this.handleFieldChange}
                />
                <FormElement
                    name="email"
                    label="Email:"
                    initialValue={this.state.company.email ? this.state.company.email : ['']}
                    hasMultipleFields
                    hasPrimaryIdentifier
                    initialPrimaryIndex={this.state.company.primaryEmail ? this.state.company.primaryEmail : 0}
                    onChange={this.handleMultiFieldChange}
                />
                <FormElement
                    name="phone"
                    label="Phone:"
                    initialValue={this.state.company.phone ? this.state.company.phone : ['']}
                    hasMultipleFields
                    hasPrimaryIdentifier
                    initialPrimaryIndex={this.state.company.primaryPhone ? this.state.company.primaryPhone : 0}
                    onChange={this.handleMultiFieldChange}
                />
                <FormElement
                    name="lastContacted"
                    label="Last Contacted:"
                    initialValue={this.state.company.lastContacted ? this.state.company.lastContacted : null}
                    isDateField
                    onChange={this.handleFieldChange}
                />
                <FormElement
                    name="notes"
                    label="Notes:"
                    initialValue={this.state.company.notes ? this.state.company.notes : ['']}
                    hasMultipleFields
                    isMultiline
                    onChange={this.handleMultiFieldChange}
                />

                <input
                    className="form__submit"
                    type="submit"
                    value="Save Company"
                />
            </form>
        );
    }
}
