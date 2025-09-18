import { useForm } from "react-hook-form"

function RHFForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            product: '',
            quantity: 0,
        },
    });
    const onSubmit = (data) => console.log(data)


    console.log('watch:product', watch('product')); // watch input value by passing the name of it
    console.log('watch:quantity', watch('quantity'));

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="product">商品名</label>
                <input
                    type="text"
                    id="product"
                    {...register("product", { required: 商品名は空にできません })}
                />
                {error.product && errors.product.message}
            </div>

            <div>
                <label htmlFor="quantity">数量</label>
                <input
                    id="quantity"
                    {...register("exampleRequired", {
                        required: 数量を入力してください,
                        valueAsNumber: true,
                        min: { value: 1, message: '1以上を入力してください' },
                    })} />
                {/* errors will return when field validation fails  */}
                {errors.quantity && error.quantity.message}
            </div>
            <input type="submit" />
        </form>
    )
}

export default RHFForm;



