import { useState } from "react"
const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "1",
    timeToFinish: 60,
}
function ResourceForm({onFormSubmit , initialData}) {
    const [form, setForm] = useState(initialData || DEFAULT_DATA)
    const handleSubmit = () => {
        onFormSubmit(form)
    }

    const handleReset = () => {
        setForm(DEFAULT_DATA)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <div className="resource-form"><div className="resource-form">
            <h1 className="title">Add New Resource</h1>
            <form>
                <div className="field mt-4">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            className="input"
                            value={form.title}
                            onChange={handleChange}
                            name="title"
                            type="text"
                            placeholder="Learn Nextjs and Sanity IO" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea"
                            value={form.description}
                            onChange={handleChange}
                            name="description"
                            placeholder="Learn these technologies because they are very popular and enable better SEO">
                        </textarea>
                    </div>
                </div>

                <div className="field mt-4">
                    <label className="label">Link</label>
                    <div className="control">
                        <input
                            className="input"
                            onChange={handleChange}
                            name="link"
                            value={form.link}
                            type="text"
                            placeholder="Nextjs.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Piority</label>
                    <div className="control">
                        <div className="select">
                            <select
                                value={form.priority}
                                onChange={handleChange}
                                name="priority"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field mt-4">
                    <label className="label">Time to finish</label>
                    <div className="control">
                        <input className="input"
                            value={form.timeToFinish}
                            onChange={handleChange}
                            name="timeToFinish"
                            type="number"
                            placeholder="60" />
                    </div>
                    <p className="help">Time is in minutes</p>
                </div>

                <div className="field is-grouped mt-4">
                    <div className="control">
                        <button
                            type="submit"
                            className="button is-link"
                            onClick={handleSubmit}
                        >Submit</button>
                    </div>
                    <div className="control">
                        <button
                            className="button is-link is-light"
                            onClick={handleReset}
                        >Reset</button>
                    </div>
                </div>
            </form>
        </div></div>
    )
}
export default ResourceForm
